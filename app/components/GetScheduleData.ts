export default function getScheduleData () {
  const scheduleData = {
    "sessions": [
      {
         "time": "12:10",
         "workshopIDs": ["6", "7", "9", "3", "17", "15", "20"]
      },
      {
         "time": "13:40",
         "workshopIDs": ["22", "8", "4", "1", "16", "26", "10", "5"]
      },
      {
         "time": "14:30",
         "workshopIDs": ["22", "7", "11", "23", "25", "15", "18", "19"]
      },
      {
         "time": "15:40",
         "workshopIDs": ["16", "21", "11", "13", "14", "2", "12", "24"]
      }
   ]
  }

  return scheduleData["sessions"];
}