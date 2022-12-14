const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create thought to user
  createThought({ body }, res) {
    console.log(body);
    Thought.create(body)
      .then((thoughtData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User with this ID" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  //update thought by it's id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // delete a thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Add a new Reaction
  addReaction({params, body}, res) {
    thoughts.findOneAndUpdate({_id: params.thoughtId}, {$push: {reactions: body}}, {new: true, runValidators: true})
    .populate({path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(thoughtsData => {
    if (!thoughtsData) {
        res.status(404).json({message: 'No thoughts with this particular ID!'});
        return;
    }
    res.json(ThoughtsData);
    })
    .catch(err => res.status(400).json(err))

},
    // Delete a reaction by ID
    deleteReaction({params}, res) {
        thoughts.findOneAndUpdate({_id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new : true})
        .then(thoughtsData => {
            if (!thoughtsData) {
                res.status(404).json({message: 'No thoughts with this ID'});
                return;
            }
            res.json(thoughtsData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;