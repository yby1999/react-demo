import * as React from 'react'

export interface Props {
    name: string;
    level?: number;
}

const get = (num : number) => {
    return Array(num + 1).join('!!!');
}
const Demo: React.FC<Props> = ({ name, level = 1 }: Props) => {

    console.log(process.env)

    return (
        <div style={{ height:'200px' }} className="greeting">
            <h1>Hello {name + get(level)}</h1>
        </div>
    )

}

export default Demo