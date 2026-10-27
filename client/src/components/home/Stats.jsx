import {
  Briefcase,
  Trophy,
  CheckCircle,
  Clock,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      id: 1,
      title: "Total Interviews",
      value: "24",
      icon: <Briefcase size={30} />,
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Average Score",
      value: "92%",
      icon: <Trophy size={30} />,
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Completed",
      value: "18",
      icon: <CheckCircle size={30} />,
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Pending",
      value: "06",
      icon: <Clock size={30} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>

            </div>

            <div
              className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
            >
              {item.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Stats;