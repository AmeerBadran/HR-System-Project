import { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const DashboardChart = () => {
  const chartRef = useRef();

  const data = {
    labels: ["Paid", "Unpaid", "Postponed"],
    datasets: [{
      backgroundColor: [
        "#00BD52",
        "#E69900",
        "#0F0F0F"
      ],
      borderColor: '#191c24',
      borderWidth: 4,
      data: [55, 49, 44],
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      }
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = chartRef.current;

      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center h-[250px] w-[100%] min-w-36 mt-4">
      <Doughnut ref={chartRef} data={data} options={options} className="flex justify-center items-center lg:h-full md:h-1/2 sm:h-1/3 h-[100%] lg:w-full md:w-1/2 sm:w-1/3 w-[150px]"/>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>$1200</p>
        <p style={{ margin: 0 }}>Total Paid</p>
      </div>
    </div>
  );
};

export default DashboardChart;
