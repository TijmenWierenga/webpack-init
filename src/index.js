import './styles/app.scss';
const foo = require('./foo');

if (module.hot) {
    module.hot.accept('./foo', () => {
        cheers = require('./foo') - 1;
        updateCheers();
    });
}

let cheers = foo;
const state = document.getElementById('state');

const updateCheers = () =>
    state.textContent = state.textContent.replace(/(\d+)/, ++cheers);


state.textContent = `Running ${process.env.NODE_ENV} build. Cheered: ${foo} times.`;
document.getElementById('cheer').onclick = updateCheers;
