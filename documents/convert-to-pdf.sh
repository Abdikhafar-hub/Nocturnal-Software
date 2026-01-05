#!/bin/bash

# Script to convert HTML documents to PDF using pandoc
# Make sure pandoc and wkhtmltopdf or weasyprint is installed

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCUMENTS_DIR="$SCRIPT_DIR"
PUBLIC_DIR="$PROJECT_ROOT/public"

echo "Converting HTML documents to PDF..."
echo "Documents directory: $DOCUMENTS_DIR"
echo "Public directory: $PUBLIC_DIR"

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "Error: pandoc is not installed."
    echo "Please install pandoc: sudo apt-get install pandoc (Ubuntu/Debian) or brew install pandoc (macOS)"
    exit 1
fi

# Check if weasyprint or wkhtmltopdf is available for better HTML rendering
# Pandoc can use these for better PDF output
HAS_WEASYPRINT=false
HAS_WKHTMLTOPDF=false

if command -v weasyprint &> /dev/null; then
    HAS_WEASYPRINT=true
    echo "Found weasyprint - will use for better rendering"
fi

if command -v wkhtmltopdf &> /dev/null; then
    HAS_WKHTMLTOPDF=true
    echo "Found wkhtmltopdf - will use for better rendering"
fi

# Function to convert HTML to PDF
convert_html_to_pdf() {
    local html_file="$1"
    local pdf_file="$2"
    
    echo ""
    echo "Converting: $html_file -> $pdf_file"
    
    # Update logo paths in HTML to absolute paths for pandoc
    local temp_html=$(mktemp)
    sed "s|src=\"../public/logo.png\"|src=\"file://$PUBLIC_DIR/logo.png\"|g" "$html_file" > "$temp_html"
    
    if [ "$HAS_WKHTMLTOPDF" = true ]; then
        # Use wkhtmltopdf for better HTML/CSS rendering
        wkhtmltopdf \
            --page-size A4 \
            --margin-top 20mm \
            --margin-bottom 20mm \
            --margin-left 20mm \
            --margin-right 20mm \
            --enable-local-file-access \
            --print-media-type \
            "$temp_html" "$pdf_file"
    elif [ "$HAS_WEASYPRINT" = true ]; then
        # Use weasyprint for better HTML/CSS rendering
        weasyprint "$temp_html" "$pdf_file"
    else
        # Use pandoc with LaTeX engine (requires LaTeX installation)
        # Alternative: use pandoc with HTML engine
        pandoc "$temp_html" \
            -o "$pdf_file" \
            --pdf-engine=wkhtmltopdf \
            -V geometry:margin=2cm \
            --standalone \
            || pandoc "$temp_html" \
            -o "$pdf_file" \
            -V geometry:margin=2cm \
            --standalone \
            --css="$DOCUMENTS_DIR/style.css" 2>/dev/null || {
            echo "Warning: Direct PDF conversion failed. Trying alternative method..."
            # Fallback: Use Chrome/Chromium headless if available
            if command -v google-chrome &> /dev/null || command -v chromium-browser &> /dev/null; then
                local chrome_cmd="google-chrome"
                [ -z "$(command -v google-chrome)" ] && chrome_cmd="chromium-browser"
                $chrome_cmd --headless --disable-gpu --print-to-pdf="$pdf_file" "file://$temp_html" 2>/dev/null
            else
                echo "Error: No suitable PDF conversion tool found."
                echo "Please install one of: wkhtmltopdf, weasyprint, or Chrome/Chromium"
                rm "$temp_html"
                return 1
            fi
        }
    fi
    
    rm "$temp_html"
    
    if [ -f "$pdf_file" ]; then
        echo "✓ Successfully created: $pdf_file"
    else
        echo "✗ Failed to create: $pdf_file"
        return 1
    fi
}

# Convert Intellectual Property Agreement
convert_html_to_pdf \
    "$DOCUMENTS_DIR/intellectual-property-agreement.html" \
    "$DOCUMENTS_DIR/intellectual-property-agreement.pdf"

# Convert Software Development Agreement
convert_html_to_pdf \
    "$DOCUMENTS_DIR/software-development-agreement.html" \
    "$DOCUMENTS_DIR/software-development-agreement.pdf"

echo ""
echo "Conversion complete!"
echo "PDF files are located in: $DOCUMENTS_DIR"



