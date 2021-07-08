import React, {useContext} from 'react'
import { Table } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser';
import { GlobalContext } from "../Context/Context";
const Tabs = () => {
    const { productDetail } = useContext(GlobalContext)
    return (
        <div className="pt-5">
            {/* <section className="text-center tabs-text">
                <span className="text-danger mx-3 margin-left-none  fw-bold">Specification</span>
                <span className="text-muted  mx-3 margin-left-none fw-bold">Overview</span>
                <span className="text-muted  mx-3 margin-left-none fw-bold">Additional Information</span>
                <span className="text-muted  mx-3 margin-left-none fw-bold">Warranties</span>
                <span className="text-muted  mx-3 margin-left-none fw-bold">Reviews</span>
            </section> */}

            <section className="mt-5">
                <h2 className="text-muted fw-bold">Brief Description</h2>
                <div className="justify px-4" style={{ maxHeight: "25rem", overflow: "auto" }}>
                            <span style={{ fontSize: "small" }}>{ReactHtmlParser(productDetail && productDetail.description)}</span>
                        </div>
                {/* <Table className="mt-4" striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Network</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-25">1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Wireless LAN Features</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Mobile Network</th>
                        </tr>
                        <tr>
                            <td>3G</td>
                            <td>N</td>
                        </tr>
                        <tr>
                            <td>4G</td>
                            <td>N</td>
                        </tr>
                        <tr>
                            <th className="text-danger h4 fw-bold" colSpan="2">Power</th>
                        </tr>
                        <tr>
                            <td>Power source type</td>
                            <td>AC</td>
                        </tr>
                    </tbody>
                </Table> */}
            </section>
        </div>
    )
}

export default Tabs
