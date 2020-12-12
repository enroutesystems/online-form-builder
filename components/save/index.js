var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function createForm(uid, username, title, body) {
  // A post entry.
  let form = {
    author: username,
    uid: uid,
    body: body,
    title: title,
  };

  // Get a key for a new Post.
  var newFormKey = firebase.database().ref().child('form').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/forms/' + newFormKey] = postData;
  updates['/user-forms/' + uid + '/' + newFormKey] = postData;

  return firebase.database().ref().update(updates);
}

firebase.database().ref('users/' + userId).set({
  username: name,
  email: email,
  profile_picture : imageUrl
}, (error) => {
  if (error) {
    // The write failed...
  } else {
    // Data saved successfully!
  }
});
