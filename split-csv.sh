#!/bin/bash
# Split businesses.csv into batches of 50

INPUT_FILE="businesses.csv"
BATCH_SIZE=50
HEADER=$(head -n 1 "$INPUT_FILE")

# Get total number of businesses (excluding header)
TOTAL_LINES=$(wc -l < "$INPUT_FILE")
TOTAL_BUSINESSES=$((TOTAL_LINES - 1))

echo "Total businesses: $TOTAL_BUSINESSES"
echo "Creating batches of $BATCH_SIZE..."

# Calculate number of batches
BATCHES=$(( (TOTAL_BUSINESSES + BATCH_SIZE - 1) / BATCH_SIZE ))

for ((batch=1; batch<=BATCHES; batch++)); do
    OUTPUT_FILE="businesses-batch-${batch}.csv"

    # Calculate start and end lines for this batch
    START_LINE=$(( (batch - 1) * BATCH_SIZE + 2 ))  # +2 because line 1 is header
    END_LINE=$(( batch * BATCH_SIZE + 1 ))

    # If this is the last batch, adjust end line
    if [ $END_LINE -gt $TOTAL_LINES ]; then
        END_LINE=$TOTAL_LINES
    fi

    # Create the batch file with header
    echo "$HEADER" > "$OUTPUT_FILE"

    # Add the businesses for this batch
    sed -n "${START_LINE},${END_LINE}p" "$INPUT_FILE" >> "$OUTPUT_FILE"

    # Count businesses in this batch
    BATCH_COUNT=$(($(wc -l < "$OUTPUT_FILE") - 1))

    echo "Created $OUTPUT_FILE with $BATCH_COUNT businesses"
done

echo "Done! Created $BATCHES batch files."
