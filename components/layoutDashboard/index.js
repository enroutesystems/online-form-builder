import { getSession } from 'next-auth/client'
import api from '../../helpers/api'
import React, { Component } from 'react';
import Navbar from '../navbarDashboard'
import Card from '../cardDashboard'
import CardCreate from '../cardCreateDashboard'

const LayoutDashboard = ({ session, forms }) => {
    console.log(forms)
    return(
        <div className="min-h-screen auto-rows-auto">
            <Navbar></Navbar>
            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="mb-6">
                    <h2 className="text-2xl">Workspace</h2>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <CardCreate></CardCreate>
                </div>
            </div>
        </div>
    );
}

export default LayoutDashboard
