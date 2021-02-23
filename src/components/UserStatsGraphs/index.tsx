import { useEffect, useState } from "react";
import { AnimeLeft } from "styles";
import { UserStatsData } from "types/components/UserStatsGraphs";
import * as S from "./styles";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

function UserStatsGraphs({ data }: { data: UserStatsData[] }) {
  const [graph, setGraph] = useState<{ x: string; y: number }[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => ({ x: item.title, y: +item.acessos }));

    setTotal(
      data.map((stat) => +stat.acessos).reduce((prev, atual) => prev + atual, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <AnimeLeft>
      <S.UserStatsGraphs>
        <S.TotalStats>
          <p>Acessos: {total}</p>
        </S.TotalStats>
        <S.GraphItem>
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
              labels: { fontSize: 14, fill: "#333" },
            }}
          />
        </S.GraphItem>
        <S.GraphItem>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph}></VictoryBar>
          </VictoryChart>
        </S.GraphItem>
      </S.UserStatsGraphs>
    </AnimeLeft>
  );
}

export default UserStatsGraphs;
