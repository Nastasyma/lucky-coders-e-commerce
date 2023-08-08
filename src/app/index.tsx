import styles from './index.module.scss';

interface SimpleComponentProps {
  name: string;
}

function App({ name }: SimpleComponentProps): JSX.Element {
  return (
    <div className={styles.app}>
      <div>
        <h1>Hello, {name}!</h1>
        <p>This is a simple React component.</p>
        <span>😉</span>
      </div>
    </div>
  );
}

export default App;
