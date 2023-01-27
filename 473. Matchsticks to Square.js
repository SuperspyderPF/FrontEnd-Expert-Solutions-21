var makesquare = function(matchsticks) {
    let arr = matchsticks;
    let n = arr.length;
    let a = arr.reduce((acc, v)=>acc+v);
    if (a%4!=0)
        return false;
    a/=4;
    let go = ()=>{
        let used = new Set();
        for (let i = 0;i<4;i++)
        {
            for (let j = 0;j<(1<<n);j++)
            {
                let cur = 0;
                let arr2 = [];
                for (let k = 0;k<n;k++)
                {
                    if (((1<<k) & j) && !used.has(k))
                    {
                        cur+=arr[k];
                        arr2.push(k);
                    }
                }
                if (cur==a)
                {
                    arr2.map(x=>used.add(x));
                    break;
                }
            }
        }
        return used.size == n;
    }
    let res = false;
    for (let i = 0;i<11;i++)
    {
        res|=go();
        for (let j = 0;j<n/2;j++)
        {
            let rnd = Math.random()*n|0;
            [arr[j], arr[rnd]] = [arr[rnd], arr[j]];
        }
        if (res)
            return true;
    }
    return !!res;
};