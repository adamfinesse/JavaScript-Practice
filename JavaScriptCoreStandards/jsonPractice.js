//----------------------------------------------------------------------------------------------------------------------------------------------//

let user = {
    name: "John Smith",
    age: 35
    };

    let user2 = JSON.parse(JSON.stringify(user));

//----------------------------------------------------------------------------------------------------------------------------------------------//

 //https://javascript.info/task/serialize-event-circular
 let room = {
    number: 23
    // room references meetup
    };

    let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room // meet up references room
    //meet up references it self
    };

    // circular references
    room.occupiedBy = meetup;
    meetup.self = meetup;

    alert( JSON.stringify(meetup, function replacer(key, value) {
        // if(key == "self") return undefined;

        // if(key == "occupiedBy" && !Array.isArray(value)) return undefined;
        // return value;
        return (key != "" && value == meetup) ? undefined : value;

    }),2);

    /* result should be:
    {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
    }
    */

//----------------------------------------------------------------------------------------------------------------------------------------------//
