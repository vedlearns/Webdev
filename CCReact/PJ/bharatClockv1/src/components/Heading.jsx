import CurrentTime from "./CurrentTime";

function Heading() {
  return <>
    <center>
  <h1 className="m-4 text-black text-3xl font-medium">Bharat Clock</h1>
  <h1 className="text-lg font-normal text-black tracking-wide">This is the clock that shows the time in Bharat at all times</h1>
  <CurrentTime/>
    </center>
  </>;
}
export default Heading;
