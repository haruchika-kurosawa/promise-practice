function noGoodOnReady(fn) {
	const readyState = document.readyState;
	// interactive
	// 文書の読み込みが完了
	// complete
	// 文書とすべてのサブリソースの読み込みが完了しました。
	// この状態は load イベントが発行されようとしていることを示しています。
	if (readyState === "interactive" || readyState === "complete") {
		fn();
	} else {
		window.addEventListener("DOMContentLoaded", fn);
	}
}

onReady(() => {
	console.log("DOM fully loaded and parsed");
});


function goodReadyPromise() {
  return new Promise((resolve) => {
      const readyState = document.readyState;
      if (readyState === "interactive" || readyState === "complete") {
          resolve();
      } else {
          window.addEventListener("DOMContentLoaded", resolve);
      }
  });
}
goodReadyPromise().then(() => {
  console.log("DOM fully loaded and parsed");
});

export default App;
