import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const CoreServies = () => {
    return (
        <>
            <h1 className="heading">Core Networking Servies</h1>
            <section className="about">
                <img src={require("../../../assests/Network.jpg")} alt="" />
                <div className="content">


                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Core Networking Servies</Th>
                                <Th>Date</Th>
                                <Th>Location</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Products</Td>
                                <Td>9 April 2019</Td>
                                <Td>East Annex</Td>
                            </Tr>
                            <Tr>
                                <Td>serives </Td>
                                <Td>19 May 2019</Td>
                                <Td>205 Gorgas</Td>
                            </Tr>
                            <Tr>
                                <Td>Tuscaloosa D3</Td>
                                <Td>29 June 2019</Td>
                                <Td>Github</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </div>
            </section>
        </>
    )
}

export default CoreServies