export default function Template({ children }) {
  console.log(1); // rerender's template everytime visiting assosite pages while layout doesn't
  return <div>{children}</div>;
}
