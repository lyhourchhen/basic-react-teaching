import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/card";

interface DotaHeroInterface {
  localized_name: string;
  id: number;
  attack_type: "Melee" | "Ranged";
}

const HomePage = () => {
  const [data, setData] = useState<DotaHeroInterface[]>([]);

  useEffect(() => {
    axios
      .get("https://api.opendota.com/api/heroes")
      .then((res) => {
        const value = res.data;
        setData(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((hero) => {
        return (
          <Card
            heroType={hero.attack_type}
            key={hero.id}
            name={hero.localized_name}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
