import * as React from 'react'
import { useEffect ,useState} from 'react';

export interface Props {
    name: string;
    level?: number;
}

const get = (num: number) => {
    return Array(num + 1).join('!!!');
}
const Demo: React.FC<Props> = ({ name, level = 1 }: Props) => {


    // const [query1, setQuery1] = useState<any>("222333");
    // const [query12, setQuery12] = useState<any>("222333");
    // const [query13, setQuery13] = useState<any>("222333");
    // const [query14, setQuery14] = useState<any>("222333");
    // const [query144, setQuery144] = useState<any>("222333");
    // const [query1444, setQuery1444] = useState<any>("222333");
    // const [query1333, setQuery1333] = useState<any>("222333");
    
    // const makeData = async (x :any) => {

    //     return new Promise((re, rj) => {
    //         setTimeout(() => { re (x+1) }, 3000)
    //     })
        
    // }
    const data = {
        users : [
            {
                a: '',
                b: '1',
            },
            {
                a: '',
                b: '2',
            }
        ]
    }

    useEffect(() => {
        // const data = async () => {
        //     const res = await makeData(9)
        //     console.log(123)
        //     setQuery(res)
        // }
        // data()
        const users = data.users.map((item, _index) => {return { ...item, a: '1' , b: '7'}})
        console.log({...data, users})
    },[])
    // makeData(9).then(r=>{ console.log(1,r)})
    // console.log(query)

    return (
        <div style={{ height: '200px' }} className="greeting">
            <h1>Hello {name + get(level)}</h1>
        </div>
    )

}

export default Demo