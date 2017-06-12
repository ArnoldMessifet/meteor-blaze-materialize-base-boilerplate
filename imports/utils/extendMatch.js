import { check, Match } from 'meteor/check';

Match._id = Match.Where((id) => {
    check(id, String);
    return /^[a-zA-Z0-9]{17,17}/.test(id);
});

Match.MongoCursor = Match.Where((obj) => {
    return obj instanceof Mongo.Cursor;
});
