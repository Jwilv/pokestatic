import { Pokemon, Stat } from '@/interfaces';
import { Chart, ChartItem } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import styles from './PokemonStats.module.css'

export const PokemonStats = ({ stats }: Pokemon) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const myChartRef = useRef<Chart | any>(null);

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
            _datasets: [
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
            ],
            get datasets() {
                return this._datasets;
            },
            set datasets(value) {
                this._datasets = value;
            },
        };

        const newLocal = 'polarArea';
        const myChart = new Chart(ctx, {
            type: newLocal,
            data: data,
            options: {
                // responsive: false,
            },
        });

        myChartRef.current = myChart;
    };

    return (
        <div className={styles.chart}>
            <canvas id="myChart" ref={chartRef} ></canvas>
        </div>
    );
};
