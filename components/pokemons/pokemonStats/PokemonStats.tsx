import { Pokemon, Stat } from '@/interfaces';
import { Chart, ChartItem } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import styles from './PokemonStats.module.css'

export const PokemonStats = ({ stats }: Pokemon) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const myChartRef = useRef<Chart | null>(null);

    useEffect(() => {
        createGrafica();
    }, []);

    const createGrafica = () => {
        const ctx = chartRef.current;

        if (!ctx) {
            return;
        }

        if (myChartRef.current) {
            myChartRef.current.destroy();
        }

        const labels = stats.map((stat) => stat.stat.name);
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Stat',
                    data: stats.map((stat) => stat.base_stat),
                    backgroundColor: [
                        'green',
                        'red',
                        'blue',
                        'violet',
                        'yellow',
                        'orange',
                    ]
                }
            ]
        };

        const myChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                responsive: false,
            },
        });

        myChartRef.current = myChart;
    };

    return <canvas id="myChart" ref={chartRef} className={styles.chart}></canvas>;
};
