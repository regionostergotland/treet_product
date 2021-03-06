const GetInfo = (setLevel, setCurrentStreak, setLongestStreak, setCurrentTree, setTreeAge, setIsSickTree, setReachedAchievement) => {
  // EHR CREDENTIALS TAKEN OUT FOR THE PUBLIC GITHUB REPOSITORY
  var user = 'INSERT USER ACCOUNT WITH GET PERMISSIONS';
  var pw = 'INSERT USER ACCOUNT WITH GET PERMISSIONS';
  var url = 'https://rest.ehrscape.com/rest/v1/view/PUM_COMP4_GameSettings_v3';
  var headers = new Headers();
  headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));

  fetch(url, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json()).then(res => {
    setLevel(parseInt(res[0]["gameLevel"]))
    setCurrentStreak(parseInt(res[0]["currentStreak"]))
    setLongestStreak(parseInt(res[0]["longestStreak"]))
    setCurrentTree(parseInt(res[0]["currentTree"]))
    setTreeAge(parseInt(res[0]["treeAge"]))
    setIsSickTree(res[0]["isSick"])
    setReachedAchievement(JSON.parse(res[0]["achivements"]))
  });
}

export default GetInfo;
