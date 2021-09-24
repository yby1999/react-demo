import * as React from 'react'
import { useEffect ,useState} from 'react';

export interface Props {
    name: string;
    level?: number;
}

const get = (num: number) => {
    return Array(num + 1).join('!');
}
const Demo: React.FC<Props> = ({ name, level = 1 }: Props) => {

    const [query, setQuery] = useState<any>("222333");
    
    const makeData = (x :any) => {
        console.log('aa',x)
        return x+1;
    }

    useEffect(() => {
        const data = async () => {
            const res = await makeData(9)
            console.log(123)
            setQuery(res)
        }
        data()
    },[])
    console.log(query)

    return (
        <div style={{ height: '200px' }} className="greeting">
            <h1>Hello {name + get(level)}</h1>
        </div>
    )

}

export default Demo