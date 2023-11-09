export default function Layout(props) {
  return (
    <>
      {props.children}
      <div className="team_analytics container">
        {props.team}
        {props.analytics}
      </div>
    </>
  );
}
