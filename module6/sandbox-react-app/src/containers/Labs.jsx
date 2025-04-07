import { Button, ButtonGroup, Paper, Typography } from '@mui/material'
import './Labs.css'
import { useState } from 'react'
import LabOne from '../components/labOne'
import LabTwo from '../components/labTwo'
import LabThree from '../components/labThree'
import LabFour from '../components/labFour'
import LabFive from '../components/labFive'
import LabSix from '../components/labSix'

const CONFIG = [
    {
        name: "Lab One",
        component: LabOne,
    },
    {
        name: "Lab Two",
        component: LabTwo,
    },
    {
        name: "Lab Three",
        component: LabThree,
    },
    {
        name: "Lab Four",
        component: LabFour,
    },
    {
        name: "Lab Five",
        component: LabFive,
    },
    {
        name: "Lab Six",
        component: LabSix,
    },
]

export const Labs = () => {
    let [selected, setSelected] = useState(0)

    return (
        <>
            <Typography variant='h3'>Labs</Typography>
            <ButtonGroup variant="contained" aria-label="Exercise button group">
                {CONFIG.map((val, index) => (<Button onClick={() => setSelected(index)}>{val.name}</Button>))}
            </ButtonGroup>
            <Paper>
                {CONFIG[selected].component()}
            </Paper>
        </>
    )
}