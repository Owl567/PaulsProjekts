function calculateTimeToGoal() {
    const Sakratais = parseFloat(document.querySelector("#Sakratais").value);
    const Merkis = parseFloat(document.querySelector("#Merkis").value);
    const savingsRate = parseFloat(document.querySelector("#savings_rate").value);
    const timeToGoal = (Merkis - Sakratais) / savingsRate;
    const timeToGoalDienas = timeToGoal.toFixed(2);
    const timeToGoalNedelas = (timeToGoal / 7).toFixed(2);
    const timeToGoalMenesus = (timeToGoal / 30).toFixed(2);
    document.querySelector("#time_to_goal_Dienas").innerHTML = timeToGoalDienas;
    document.querySelector("#time_to_goal_Nedelas").innerHTML = timeToGoalNedelas;
    document.querySelector("#time_to_goal_Menesus").innerHTML = timeToGoalMenesus;
  }