#!/bin/bash

# Script to convert HTML documents to PDF using Chrome/Chromium headless
# This method provides the best HTML/CSS rendering for complex documents

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCUMENTS_DIR="$SCRIPT_DIR"
PUBLIC_DIR="$PROJECT_ROOT/public"

echo "Converting HTML documents to PDF using Chrome/Chromium..."
echo "Documents directory: $DOCUMENTS_DIR"
echo "Public directory: $PUBLIC_DIR"

# Find Chrome or Chromium
CHROME_CMD=""
if command -v google-chrome &> /dev/null; then
    CHROME_CMD="google-chrome"
elif command -v chromium-browser &> /dev/null; then
    CHROME_CMD="chromium-browser"
elif command -v chromium &> /dev/null; then
    CHROME_CMD="chromium"
else
    echo "Error: Chrome/Chromium not found."
    echo "Please install Chrome or Chromium browser."
    echo "Ubuntu/Debian: sudo apt-get install chromium-browser"
    echo "macOS: brew install --cask google-chrome"
    exit 1
fi

echo "Using: $CHROME_CMD"

# Function to convert HTML to PDF using Chrome
convert_html_to_pdf() {
    local html_file="$1"
    local pdf_file="$2"
    
    echo ""
    echo "Converting: $html_file -> $pdf_file"
    
    # Convert to absolute path
    local abs_html_file=$(cd "$(dirname "$html_file")" && pwd)/$(basename "$html_file")
    local abs_pdf_file=$(cd "$(dirname "$pdf_file")" && pwd)/$(basename "$pdf_file")
    
    # Use Chrome headless to print to PDF
    $CHROME_CMD \
        --headless \
        --disable-gpu \
        --no-pdf-header-footer \
        --print-to-pdf="$abs_pdf_file" \
        "file://$abs_html_file" \
        2>/dev/null
    
    if [ -f "$abs_pdf_file" ]; then
        echo "✓ Successfully created: $abs_pdf_file"
        return 0
    else
        echo "✗ Failed to create: $abs_pdf_file"
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
echo ""
echo "To view the PDFs:"
echo "  - Intellectual Property Agreement: $DOCUMENTS_DIR/intellectual-property-agreement.pdf"
echo "  - Software Development Agreement: $DOCUMENTS_DIR/software-development-agreement.pdf"



