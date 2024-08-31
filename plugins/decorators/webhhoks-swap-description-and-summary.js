export function WebhooksSwapDescriptionAndSummary() {
  console.log('🔁 Swapping description and summary...');

  return {
    WebhooksMap: {
      Operation: {
        enter(operation) {
          const { summary, description } = operation;

          if (summary && description) {
            operation.summary = removeTextAfterDot(description);
            operation.description = summary;
          } else if (!description) {
            operation.summary = removeTextAfterDot(summary);
          }
        },
      },
    },
  };
}

function removeTextAfterDot(description) {
  const dotIndex = description.indexOf('.');

  return dotIndex !== -1 ? description.substring(0, dotIndex + 1) : description;
}
