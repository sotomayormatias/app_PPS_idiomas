export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBuw1i4OUPP9D4z994Didi0O9wff9U3y3o",
  authDomain: "sonidiomas.firebaseapp.com",
  databaseURL: "https://sonidiomas.firebaseio.com",
  projectId: "sonidiomas",
  storageBucket: "sonidiomas.appspot.com",
  messagingSenderId: "557462864523"
};

export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });

  return returnArray;
}