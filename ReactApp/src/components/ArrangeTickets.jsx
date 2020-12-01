import React from "react";

export default function ArrangeTickets() {
  return (
    <div>
      <input type="radio" id="selectByDate" name="select" value="date"></input>
      <label for="age1">Order by duedate</label><br />
      <input type="radio" id="selectByDifficulty" name="select" value="difficulty"></input>
      <label for="age2">order by difficulty</label> <br />
      <input type="radio" id="selectByPriority" name="select" value="priority"></input>
      <label for="age3">order by priority</label> <br />
      <button type="submit" value="Submit">Select</button>
    </div>
  );
}
