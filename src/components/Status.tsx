type StatusProps = {
  messages: "loading" | "success" | "error"; // status can only be one of these three values
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.messages === "loading") {
    message = "Loading...";
  } else if (props.messages === "error") {
    message = "Error fetching data";
  } else if (props.messages === "success") {
    message = "Data fetched successfully";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
