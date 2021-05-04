import React from 'react'

export default function OrderTickets(props) {

    const sentOrderTickets = () => {
        let orderValue = document.querySelector('input[name="order"]:checked').value;
        props.orderTickets.OrderTickets(orderValue);
    }

    return (
        <div>
                  <div>
        <input type="radio" id="selectByDate" name="order" value="duedate"></input>
        <label >Order by duedate</label><br />
        <input type="radio" id="selectByDifficulty" name="order" value="difficulty"></input>
        <label >order by difficulty</label> <br />
        <input type="radio" id="selectByPriority" name="order" value="priority"></input>
        <label >order by priority</label> <br />
        <button type="submit" onClick={sentOrderTickets} value="Submit">Select</button>
      </div>
        </div>
    )
}
