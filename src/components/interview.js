import React, { useState, useEffect } from "react";

const people = [
    "Geo",
    "Daniel",
    "Stephen",
    "Alex",
    "Zev"
];

const Interview = (props) => {
    const [state, setState] = useState({
        searchBox: null,
        filteredPeople: []
    });

    const handleChange = (value) => {
        if (value === '' || !value) {
            setState(prevState => ({
                ...prevState,
                searchBox: value,
                filteredPeople: []
            }));
            return;
        }

        setState(prevState => ({
            ...prevState,
            searchBox: value,
            filteredPeople: people.filter(p => p.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        }));
    }

    const calculateTotalDistinctWays = () => {
        const steps = 50;
        let totalDistinctWays = 0;

        // for all the 1's
        totalDistinctWays++;

        // for all the 2's
        if (steps % 2 === 0) {
            totalDistinctWays++;
        }

        const k = Math.floor(steps / 2);
        for (let i = 1; steps % 2 === 0 ? i < k : i <= k; i++) {
            totalDistinctWays++;
        }

        setState(prevState => ({ ...prevState, totalDistinctWays }));
    }

    useEffect(() => {
        calculateTotalDistinctWays();
    }, []);

    return (
        <React.Fragment>

            <div style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                left: '50%',
                top: '50%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 32,
                fontWeight: '900',
                border: '2px solid red',
                height: 200,
                width: 400
            }}>
                {props.label}
            </div>


            {'Answer 2 and 6: search box ==>'}
            <div>
                <input onChange={e => handleChange(e.target.value)} placeholder="Search" value={state.searchBox || ''} />
                <ul>
                    {state.filteredPeople.map(p => <li key={p}>
                        {p.split('').map((splittedP, i) => {
                            const charFound = (state.searchBox || '').toLowerCase().indexOf(splittedP.toLowerCase()) !== -1;
                            return (
                                <span key={`${splittedP}-{i}`} style={{ color: charFound && 'red' || 'black' }}>{splittedP}</span>
                            )
                        })}
                    </li>)}
                </ul>
            </div>


            {'Answer 3: Total Distinct Ways ==>'}&nbsp;{state.totalDistinctWays}

        </React.Fragment>
    )
}

export default Interview;



// Answer 1b: we should always use the useState hook or setState() method to update the state of the variable, as it holds the previous set values and directly updating will not lead to rebndering of the changes. we might not see the changes on the screen.
// this.state.message = 'Hello world' is incorrect as it will not repaint the window(only the portion to be repainted nnt the whole window) and we might see the result on the browser window.



// answer 3
/**
 * step 1 ==> 1
 *
 * step 2 ==> 2
 *
 * step 3 ===> 2 (1*3) and (2+1)
 *
 * step 4 ==>  3 (1*4) and (2*2) and (2*1 + 1*2)
 *
 * step 5 ==> 3 (1*5) and (2*2 + 1) and (2*1 + 1*3)
 *
 * step 6 ==> 4 (1*6) and (2*3) and (2*2 + 1*2) and (2*1 + 1*4)
 *
 * step 7 ===> 4 (1*7) and (2*3 + 1) and (2*2 + 1*3) and (2*1 + 1*5)
 *
 * step 8 ===> 5 (1*8) and (2*4) and (2*3 + 1*2) and (2*2 + 1*4) and (2*1 + 1*6)
 *
multiple of 1
multiple of 2 n % 2 === 0

6 / 2 ==> 3 - 1 ? and rest 1's keep on running loop until 1
 */



// answer 4 : aws lambda, sns, s3 bucket

// answer 5: the actual requirement doc, and the needs, the results

// answer 6: done with answer 2