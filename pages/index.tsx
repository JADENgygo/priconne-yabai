import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [position, setPosition] = useState<{peko: number[], kyaru: number[]}>({peko: [], kyaru: []});
  const [side, setSide] = useState<{peko: number[], kyaru: number[]}>({peko: [], kyaru: []});
  const [count, setCount] = useState(0);

  const show = (added = true) => {
    if (added) {
      setCount(count + 1);
    }
    const pekoPositions = [0, 1, 2, 3];
    let i = 0;
    while (i < 100) {
      const x = Math.trunc(Math.random() * 1000) % 4;
      const y = Math.trunc(Math.random() * 1000) % 4;
      if (x === y) {
        continue;
      }
      const buf = pekoPositions[x];
      pekoPositions[x] = pekoPositions[y];
      pekoPositions[y] = buf;
      ++i;
    }
    const kyaruPositions = [0, 1, 2, 3];
    i = 0;
    while (i < 100) {
      const x = Math.trunc(Math.random() * 1000) % 4;
      const y = Math.trunc(Math.random() * 1000) % 4;
      if (x === y) {
        continue;
      }
      const buf = kyaruPositions[x];
      kyaruPositions[x] = kyaruPositions[y];
      kyaruPositions[y] = buf;
      ++i;
    }
    setPosition({peko: pekoPositions, kyaru: kyaruPositions});

    setSide({
      peko: [
        Math.random() * 1000 < 500 ? 1 : -1,
        Math.random() * 1000 < 500 ? 1 : -1,
        Math.random() * 1000 < 500 ? 1 : -1,
        Math.random() * 1000 < 500 ? 1 : -1,
      ],
      kyaru: [
        Math.random() * 1000 < 500 ? 1 : -1,
        Math.random() * 1000 < 500 ? 1 : -1,
        Math.random() * 1000 < 500 ? 1 : -1,
        Math.random() * 1000 < 500 ? 1 : -1,
      ]
    });
  };

  useEffect(() => {
    show(false);
  }, []);

  return (
    <div className="container">
      <p className="fs-1 text-center pt-3">プリコネヤバイ</p>
      <p className="text-center">やばいですね☆</p>
      <p className="text-center">ヤバいわよ！！</p>
      <button type="button" className="btn btn-primary mb-3" onClick={() => show()}>やばる</button>
      <div className="mb-3">やばった回数: { count }</div>
      <div className="row gx-3 gy-3">
        <div className="col-12 col-sm-6">
          <div className="row gx-0 gy-0">
            {
              position.peko.map((e, i) => (
                <div key={i} className="col-6">
                  <img className="img-fluid" style={{transform: `rotate(${side.peko[i] === 1 ? 0 : -180}deg)`}} src={`/peko${e}.webp`} width={1794} height={1009} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="row gx-0 gy-0">
            {
              position.kyaru.map((e, i) => (
                <div key={i} className="col-6">
                  <img className="img-fluid" style={{transform: `rotate(${side.peko[i] === 1 ? 0 : -180}deg)`}} src={`/kyaru${e}.webp`} width={1794} height={1009} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
