'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../../src/css/status.css';

export default function Page() {
    return (
        <>
            <div className='stars'></div>
            <div className='main'>
                <table className='statustable'>
                    <tbody>
                        <tr className='table-row'>
                            <th className='tablehead'>
                                <img
                                    className='headicon'
                                    src='https://cdn.polarlab.app/src/icons/colorless/service_table.png'
                                />
                                Service
                            </th>
                            <th className='tablehead'>
                                <img
                                    className='headicon'
                                    src='https://cdn.polarlab.app/src/icons/colorless/status_table.png'
                                />
                                Status
                            </th>
                            <th className='tablehead'>
                                <img
                                    className='headicon'
                                    src='https://cdn.polarlab.app/src/icons/colorless/info_table.png'
                                />
                                Details
                            </th>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Polaris V2</td>
                            <td className='tablerow beta'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/indigo.png' />
                                Beta Testing
                            </td>
                            <td className='tablerow'>PTB Accessible</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Polar MC</td>
                            <td className='tablerow online'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/green.png' />
                                Online
                            </td>
                            <td className='tablerow'>Access Allowed </td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Glorious Development Kit</td>
                            <td className='tablerow minor'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/gold.png' />
                                Minor Issues
                            </td>
                            <td className='tablerow'>All services Operational</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Polaris V1.6</td>
                            <td className='tablerow offline'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/gray.png' />
                                Offline
                            </td>
                            <td className='tablerow'>None</td>
                        </tr>
                    </tbody>
                </table>
                <table className='statustable'>
                    <tbody>
                        <tr className='table-row'>
                            <th className='tablehead'>
                                <img
                                    className='headicon'
                                    src='https://cdn.polarlab.app/src/icons/colorless/service_table.png'
                                />
                                Services
                            </th>
                            <th className='tablehead'>
                                <img
                                    className='headicon'
                                    src='https://cdn.polarlab.app/src/icons/colorless/status_table.png'
                                />
                                Status
                            </th>
                            <th className='tablehead'>
                                <img
                                    className='headicon'
                                    src='https://cdn.polarlab.app/src/icons/colorless/info_table.png'
                                />
                                Details
                            </th>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Docs</td>
                            <td className='tablerow online'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/green.png' />
                                Online
                            </td>
                            <td className='tablerow'>All Services Operational</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Blog</td>
                            <td className='tablerow online'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/green.png' />
                                Online
                            </td>
                            <td className='tablerow'>All Services Operational</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Landing Page</td>
                            <td className='tablerow minor'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/gold.png' />
                                Minor Issues
                            </td>
                            <td className='tablerow'>Incomplete Text</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Bug Tracker</td>
                            <td className='tablerow offline'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/gray.png' />
                                Offline
                            </td>
                            <td className='tablerow'>Reconstruction in Progress</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Glorious Development Kit</td>
                            <td className='tablerow offline'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/gray.png' />
                                Offline
                            </td>
                            <td className='tablerow'>Reconstruction in Progress</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='tablerow'>Status Page</td>
                            <td className='tablerow online'>
                                <img className='rowicon' src='https://cdn.polarlab.app/src/icons/status/green.png' />
                                Online
                            </td>
                            <td className='tablerow'>Monitoring</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}