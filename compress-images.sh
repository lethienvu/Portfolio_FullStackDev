#!/bin/bash

# Backup folder
mkdir -p src/assets/originals

# Compress large images
find src/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
  size=$(stat -f%z "$file")
  # If file > 500KB (512000 bytes)
  if [ $size -gt 512000 ]; then
    echo "Compressing: $file ($(numfmt --to=iec $size 2>/dev/null || echo $size))"
    
    # Backup original
    cp "$file" "src/assets/originals/$(basename "$file")"
    
    # Compress based on extension
    if [[ "$file" == *.png ]]; then
      # PNG: reduce quality and resize if too large
      sips -s format jpeg -s formatOptions 85 "$file" --out "${file%.png}.jpg" && rm "$file"
    else
      # JPG/JPEG: reduce quality
      sips -s formatOptions 85 "$file" --out "$file.tmp" && mv "$file.tmp" "$file"
    fi
  fi
done

echo "Done! Originals backed up to src/assets/originals/"
