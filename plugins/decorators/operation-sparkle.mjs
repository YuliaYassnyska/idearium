export function OperationSparkle() {
  console.log('Adding sparkles ... ');

  return {
    Operation: {
      leave(target) {
        if (target.description) {
          target.description = '✨ ' + (target.description ?? '');
        }
      },
    },
  };
}
