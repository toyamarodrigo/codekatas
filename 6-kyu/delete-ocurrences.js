function deleteNth(arr, n) {
  const repeticiones = {};
  const resultado = arr.filter((numero) => {
    repeticiones[numero] = (repeticiones[numero] || 0) + 1;

    return repeticiones[numero] <= n;
  });
  return resultado;
}

console.log((deleteNth([20, 37, 20, 21], 1), [20, 37, 21]));
console.log(
  (deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
);
