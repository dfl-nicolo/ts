function delayedResponseWithCallback(callback: () => void) {
    function executeAfterTimeout() {
        console.log(`5. executeAfterTimeout()`);
        callback();
    }
    console.log(`2. calling setTimeout`)
    setTimeout(executeAfterTimeout, 1000);
    console.log(`3. after calling setTimeout`)
}
function callDelayedAndWait() {
    function afterWait() {
        console.log(`6. afterWait()`);
    }
    console.log(`1. calling delayedResponseWithCallback`);
    delayedResponseWithCallback(afterWait);
    console.log(`4. after calling delayedResponseWithCallback`)
}
// callDelayedAndWait();
// output should be: 1, 2, 3, 4, 5, 6

function delayedPromise(): Promise<void> {
	return new Promise<void>(
		(
			resolve: () => void, 
			_reject: () => void
		) => {
			function afterTimeout(): void {
				console.log("before resolve");
				resolve();
				console.log("after resolve");
			}
			console.log("before timeout");
			setTimeout(afterTimeout, 1000);
			console.log("after timeout");
		}
	);
}
delayedPromise().then(() => {
	console.log('delayed promise returned');
})


