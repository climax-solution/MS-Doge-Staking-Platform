import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import LineChart from "../components/Charts/Line";
import MultiLine from "../components/Charts/MultiLine";
import VerticalBar from "../components/Charts/VerticalBar";

export default function Data() {

    return (
        <>
            <Navbar />
            <div className="coin-main py-10 ms">
                <div className="container-lg">

                    <div className="row line-graph-gutter" style={{ margin: "40px 0" }}>
                        <div className="col-sm-12 col-lg-6" style={{paddingLeft: "0"}}>
                            <section className="line-graph-a">
                                <div className="d-flex justify-content-between align-items-between mb-4 w-100">
                                    <div className="d-flex justify-content-between align-items-between mb-4 w-100">
                                        <div className="w-50">
                                            <h4>MSDOGE Price</h4>
                                            <h6>$524.26</h6>
                                        </div>

                                        <div className="w-50">
                                            <h4>wsMSDOGE Price<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.31013 0.164551C3.81161 0.164551 0.164062 3.8121 0.164062 8.31062C0.164062 12.8091 3.81161 16.4567 8.31013 16.4567C12.8086 16.4567 16.4562 12.8091 16.4562 8.31062C16.4562 3.8121 12.8086 0.164551 8.31013 0.164551ZM8.31013 15.0748C4.5753 15.0748 1.54598 12.0454 1.54598 8.31062C1.54598 4.57579 4.5753 1.54647 8.31013 1.54647C12.045 1.54647 15.0743 4.57579 15.0743 8.31062C15.0743 12.0454 12.045 15.0748 8.31013 15.0748Z" fill="black" />
                                                <path d="M7.43359 5.11205C7.43359 5.34353 7.52555 5.56553 7.68923 5.72921C7.85291 5.89289 8.07491 5.98484 8.30639 5.98484C8.53787 5.98484 8.75986 5.89289 8.92354 5.72921C9.08722 5.56553 9.17918 5.34353 9.17918 5.11205C9.17918 4.88057 9.08722 4.65857 8.92354 4.49489C8.75986 4.33121 8.53787 4.23926 8.30639 4.23926C8.07491 4.23926 7.85291 4.33121 7.68923 4.49489C7.52555 4.65857 7.43359 4.88057 7.43359 5.11205ZM8.74278 7.14857H7.86999C7.78998 7.14857 7.72452 7.21403 7.72452 7.29403V12.2399C7.72452 12.3199 7.78998 12.3853 7.86999 12.3853H8.74278C8.82279 12.3853 8.88825 12.3199 8.88825 12.2399V7.29403C8.88825 7.21403 8.82279 7.14857 8.74278 7.14857Z" fill="black" />
                                            </svg>
                                            </h4>
                                            <h6>$524.26</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-between w-100">
                                    <div className="d-flex justify-content-between align-items-between w-100">
                                        <div className="w-50">
                                            <h4>Backing per MSDOGE</h4>
                                            <h6>$129.29</h6>
                                        </div>

                                        <div className="w-50">
                                            <h4>Current Index <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.31013 0.164551C3.81161 0.164551 0.164062 3.8121 0.164062 8.31062C0.164062 12.8091 3.81161 16.4567 8.31013 16.4567C12.8086 16.4567 16.4562 12.8091 16.4562 8.31062C16.4562 3.8121 12.8086 0.164551 8.31013 0.164551ZM8.31013 15.0748C4.5753 15.0748 1.54598 12.0454 1.54598 8.31062C1.54598 4.57579 4.5753 1.54647 8.31013 1.54647C12.045 1.54647 15.0743 4.57579 15.0743 8.31062C15.0743 12.0454 12.045 15.0748 8.31013 15.0748Z" fill="black" />
                                                <path d="M7.43359 5.11205C7.43359 5.34353 7.52555 5.56553 7.68923 5.72921C7.85291 5.89289 8.07491 5.98484 8.30639 5.98484C8.53787 5.98484 8.75986 5.89289 8.92354 5.72921C9.08722 5.56553 9.17918 5.34353 9.17918 5.11205C9.17918 4.88057 9.08722 4.65857 8.92354 4.49489C8.75986 4.33121 8.53787 4.23926 8.30639 4.23926C8.07491 4.23926 7.85291 4.33121 7.68923 4.49489C7.52555 4.65857 7.43359 4.88057 7.43359 5.11205ZM8.74278 7.14857H7.86999C7.78998 7.14857 7.72452 7.21403 7.72452 7.29403V12.2399C7.72452 12.3199 7.78998 12.3853 7.86999 12.3853H8.74278C8.82279 12.3853 8.88825 12.3199 8.88825 12.2399V7.29403C8.88825 7.21403 8.82279 7.14857 8.74278 7.14857Z" fill="black" />
                                            </svg>
                                            </h4>
                                            <h6>43.41 sCRYPTO</h6>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="col-sm-12 col-lg-6" style={{paddingRight: "0"}}>
                            <section className="line-graph-a">

                                <div className="d-flex justify-content-between align-items-between mb-4 w-100">
                                    <div className="d-flex justify-content-between align-items-between mb-4 w-100">
                                        <div className="w-50">
                                            <h4>CRYPTO Price</h4>
                                            <h6>$524.26</h6>
                                        </div>

                                        <div className="w-50">
                                            <h4>wsCRYPTO Price <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.31013 0.164551C3.81161 0.164551 0.164062 3.8121 0.164062 8.31062C0.164062 12.8091 3.81161 16.4567 8.31013 16.4567C12.8086 16.4567 16.4562 12.8091 16.4562 8.31062C16.4562 3.8121 12.8086 0.164551 8.31013 0.164551ZM8.31013 15.0748C4.5753 15.0748 1.54598 12.0454 1.54598 8.31062C1.54598 4.57579 4.5753 1.54647 8.31013 1.54647C12.045 1.54647 15.0743 4.57579 15.0743 8.31062C15.0743 12.0454 12.045 15.0748 8.31013 15.0748Z" fill="black" />
                                                <path d="M7.43359 5.11205C7.43359 5.34353 7.52555 5.56553 7.68923 5.72921C7.85291 5.89289 8.07491 5.98484 8.30639 5.98484C8.53787 5.98484 8.75986 5.89289 8.92354 5.72921C9.08722 5.56553 9.17918 5.34353 9.17918 5.11205C9.17918 4.88057 9.08722 4.65857 8.92354 4.49489C8.75986 4.33121 8.53787 4.23926 8.30639 4.23926C8.07491 4.23926 7.85291 4.33121 7.68923 4.49489C7.52555 4.65857 7.43359 4.88057 7.43359 5.11205ZM8.74278 7.14857H7.86999C7.78998 7.14857 7.72452 7.21403 7.72452 7.29403V12.2399C7.72452 12.3199 7.78998 12.3853 7.86999 12.3853H8.74278C8.82279 12.3853 8.88825 12.3199 8.88825 12.2399V7.29403C8.88825 7.21403 8.82279 7.14857 8.74278 7.14857Z" fill="black" />
                                            </svg>
                                            </h4>
                                            <h6>$524.26</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-between w-100">
                                    <div className="d-flex justify-content-between align-items-between w-100">
                                        <div className="w-50">
                                            <h4>Backing per CRYPTO</h4>
                                            <h6>$129.29</h6>
                                        </div>

                                        <div className="w-50">
                                            <h4>Current Index <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.31013 0.164551C3.81161 0.164551 0.164062 3.8121 0.164062 8.31062C0.164062 12.8091 3.81161 16.4567 8.31013 16.4567C12.8086 16.4567 16.4562 12.8091 16.4562 8.31062C16.4562 3.8121 12.8086 0.164551 8.31013 0.164551ZM8.31013 15.0748C4.5753 15.0748 1.54598 12.0454 1.54598 8.31062C1.54598 4.57579 4.5753 1.54647 8.31013 1.54647C12.045 1.54647 15.0743 4.57579 15.0743 8.31062C15.0743 12.0454 12.045 15.0748 8.31013 15.0748Z" fill="black" />
                                                <path d="M7.43359 5.11205C7.43359 5.34353 7.52555 5.56553 7.68923 5.72921C7.85291 5.89289 8.07491 5.98484 8.30639 5.98484C8.53787 5.98484 8.75986 5.89289 8.92354 5.72921C9.08722 5.56553 9.17918 5.34353 9.17918 5.11205C9.17918 4.88057 9.08722 4.65857 8.92354 4.49489C8.75986 4.33121 8.53787 4.23926 8.30639 4.23926C8.07491 4.23926 7.85291 4.33121 7.68923 4.49489C7.52555 4.65857 7.43359 4.88057 7.43359 5.11205ZM8.74278 7.14857H7.86999C7.78998 7.14857 7.72452 7.21403 7.72452 7.29403V12.2399C7.72452 12.3199 7.78998 12.3853 7.86999 12.3853H8.74278C8.82279 12.3853 8.88825 12.3199 8.88825 12.2399V7.29403C8.88825 7.21403 8.82279 7.14857 8.74278 7.14857Z" fill="black" />
                                            </svg>
                                            </h4>
                                            <h6>43.41 sCRYPTO</h6>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        MsDoge Total Value Deposited
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <LineChart type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        Cryptoloria Total Value Deposited
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <LineChart type="yellow" />
                            </div>
                        </div>


                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        MsDoge Market Value if Treasury Assets
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <MultiLine type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        Cryptoloria Market Value if Treasury Assets
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <MultiLine type="yellow" />
                            </div>
                        </div>


                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        MsDoge Market Risk Freee Value if Treasury Assets
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <MultiLine type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        Cryptoloria Market Risk Freee Value if Treasury Assets
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <MultiLine type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        MsDoge Protocol Owned Liquidity OHM-DAI
                                    </h4>
                                    <div className="price"><b>78.92%</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <LineChart type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        Cryptoloria Protocol Owned Liquidity OHM-DAI
                                    </h4>
                                    <div className="price"><b>78.92%</b></div>
                                    <div className="date mb-3">Today</div>

                                </div>
                                <LineChart type="yellow" />
                            </div>
                        </div>



                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        MsDoge Staked
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">$7.89b</div>

                                </div>
                                <VerticalBar type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        Cryptoloria Staked
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">$7.89b</div>

                                </div>
                                <VerticalBar type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        MsDoge Runway Available
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">308 Days</div>

                                </div>
                                <MultiLine type="yellow" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="line-graph">
                                <div className="token-graph">
                                    <h4>
                                        Cryptoloria Runway Available
                                    </h4>
                                    <div className="price"><b>$2,653,294,249</b></div>
                                    <div className="date mb-3">308 Days</div>

                                </div>
                                <MultiLine type="yellow" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
