import {Avatar, Button, Container, Input} from '@mui/material';
import Table, {ColConfig} from '../components/Table';
import students from '../mock/defaultValues';
import {formatPhone} from '../utils/strings';
import Header from "../components/Header";
import {getLocalStorageItem, setLocalStorageItem} from "../utils/localStorage";
import BasicModal from "../components/Modal";
import {useState} from "react";

const tableConfig: ColConfig[] = [
    {
        key: 'id',
        label: '',
        render: (id) => <Avatar id={id}/>
    },
    {
        key: 'fullName',
        label: 'Student Name'
    },
    {
        key: 'phone',
        label: 'Phone #',
        transformValue: (phone: string) => formatPhone(phone)
    },
    {
        key: 'addRecord',
        label: 'Add Attendance',
        render: (id) => (
            <BasicModal id={id} title={'Add Record'}/>
        )
    },
    {
        key: 'totalHours',
        label: 'Total Hours',
        render: (id) => {
            const {accumulatedHours} = getLocalStorageItem(id)
            return Number(accumulatedHours)
        }
    }
];

const Dashboard = () => {
    return (
        <>
            <Header/>
            <Container sx={{
                display: 'grid',
                placeItems: 'center',
                width: '100vw',
                height: '100vh',
            }}>
                <Table
                    rowKey="id"
                    config={tableConfig}
                    data={students}
                />
            </Container>
        </>
    )
};

export default Dashboard;
