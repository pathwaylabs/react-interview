import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from "react";
import {FormControl, InputLabel, Input, FormHelperText} from "@mui/material";
import {getLocalStorageItem, setLocalStorageItem} from "../../utils/localStorage";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    display: 'grid',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 8,
};

type TypeProps = {
    title: string
    isOpen?: boolean
    id?: string
}

export default function BasicModal({title, isOpen, id = ''}: TypeProps) {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [hours, setHours] = useState<number>(0)
    const [date, setDate] = useState()
    const handleSubmit = () => {
        const previousSave = getLocalStorageItem(id)
        setLocalStorageItem(id, {
            hours,
            accumulatedHours: hours + Number(previousSave.hours) || 0,
            date
        })

        const newSave = getLocalStorageItem(id)
        console.log('Did it work?', newSave)
    }

    useEffect(() => {
        isOpen !== undefined && setOpen(isOpen)
    }, [isOpen])

    return (
        <div>
            <Button variant={'contained'} onClick={handleOpen}>{title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component={'form'} sx={style} noValidate autoComplete={"off"}>
                    <FormControl>
                        <InputLabel htmlFor={'hours'}>Hours</InputLabel>
                        <Input id={'hours'} type={'text'} onChange={(e) => {
                            // @ts-ignore
                            setHours(e.target.value)
                        }}/>
                    </FormControl>
                    <FormControl>
                        <Input id={'date'} type={'date'} onChange={(e) => {
                            // @ts-ignore
                            setDate(e.target.value)
                        }}/>
                    </FormControl>
                    <Button variant={'contained'} onClick={handleSubmit}>Submit</Button>
                </Box>
            </Modal>

        </div>
    );
}
