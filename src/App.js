import React, { useState, Fragment } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

function App() {
  const [editPartId, setEditPartId] = useState("");

  const [partNumberImg, setPartNumberImg] = useState("");
  const [partOverviewImg, setPartOverviewImg] = useState("");
  const [warrantyTagImg, setWarrantyTagImg] = useState("");

  const [dealerID, setDealerID] = useState("");
  const [partsData, setPartsData] = useState([]);

  const filterDealer = (e) =>  {
      e.preventDefault();

      if (dealerID === ""){
        alert("Please select a dealership");
      } else {
      Axios.post("https://waidlerdev.com/partsDisposalBackend/api/post/loggingTable.php", { 
        dealerID: dealerID
        },{
          headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          }
        }).then((response) => {
            setPartsData(response.data);
            //console.log(response.data);
        }).catch(function (err) {
          console.log(err);
        });
      }
    };

  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <h1>Parts Disposal Dashboard</h1>
        <div className="dashboard">
        <div  className="filterDealer">
        <h4>Choose dealershp:</h4>
        <select name="filterDealer" defaultValue="" onChange={(e) => {setDealerID(e.target.value)}} required>
            <option value="">Choose dealership</option>
              <option value="test">Test</option>
              <option value="N/A">N/A</option>
              <option disabled>**GAUTENG**</option>
              <option value="91214">91214-Woodmead</option>
              <option value="91217">91217-Sandton </option>
              <option value="90420">90420-Kempton Park</option>
              <option value="90238">90238-Basil Green </option>
              <option value="90046">90046-Action Ford Roodepoort </option>
              <option value="90020">90020-Krugersdorp Ford </option>
              <option value="90612">90612-Krugersdorp Randfontein </option>
              <option value="90466">90466-Allen Joss</option>
              <option value="90710">90710-Menlyn </option>
              <option value="90416">90416-Park Ford </option>
              <option value="90536">90536-Springs </option>
              <option value="91204">91204-Barloworld Ford Alberton  </option>
              <option value="91203">91203-Bruma Ford </option>
              <option value="91216">91216-William Nicole </option>
              <option value="90554">90554-Boksburg  </option>
              <option value="91130">91130-Vereeniging </option>
              <option value="90022">90022-Hatfield </option>
              <option value="91193">91193-MMG Ford Heidelberg </option>
              <option value="90261">90261-Paul Maher Ford</option>
              <option value="90193">90193-Motus Ford Germiston </option>
              <option value="91065">91065-The Glen </option>
              <option value="91209">91209-Ford Selby </option>
              <option value="90471">90471-CMH Ford Randburg </option>
              <option value="91215">91215-Midrand</option>
              <option value="91218">91218-Fourways </option>
              <option value="90359">90359-Eagle Ford </option>
              <option value="90661">90661-Aurinia Ford </option>
              <option value="90468">90468-CMH Ford Gezina</option>
              <option value="90481">90481-Steyns </option>
              <option value="90560">90560-Brokenhorstspruit</option>
              <option value="90487">90487-Lazarus </option>
              <option value="98060">98060-Silverlakes </option>
              <option disabled>**WESTERN CAPE**</option>
              <option value="91070">91070-Claremont </option>
              <option value="91208">91208-Tygervalley </option>
              <option value="91099">91099-Robertson  </option>
              <option value="90042">90042-Paarden </option>
              <option value="91205">91205-N1 City </option>
              <option value="90663">90663-Jaffes Ford </option>
              <option value="90099">90099-Motus Ford Diep River </option>
              <option value="90968">90968-Rola Ford Hermanus </option>
              <option value="91088">91088-Halfway Ford Goodwood </option>
              <option value="91101">91101-Halfway Ford Kuilsriver </option>
              <option value="91111">91111-Action Ford Citrusdal </option>
              <option value="91122">91122-Rola Ford Caledon</option>
              <option value="91123">91123-Novel Ford Paarl </option>
              <option value="91124">91124-Novel Ford Stellenbosch</option>
              <option value="91125">91125-Action Ford Malmesbury </option>
              <option value="91126">91126-Action Ford Moorreesburg </option>
              <option value="91129">91129-Mossel Bay Ford </option>
              <option disabled>**KWAZULU-NATAL**</option>
              <option value="91098">91098-Kokstad </option>
              <option value="91213">91213-Amanzimtoti</option>
              <option value="90137">90137-Durban South </option>
              <option value="91202">91202-Ballito </option>
              <option value="91093">91093-Halfway Waterfall</option>
              <option value="90144">90144-CMH Ford</option>
              <option value="90455">90455-PortShep</option>
              <option value="90150">90150-Ritchie Ford </option>
              <option value="90152">90152-Ritchie Empangeni</option>
              <option value="90154">90154-Umhlanga</option>
              <option value="91190">91190-Eshowe Auto</option>
              <option value="91207">91207-Pinetown </option>
              <option value="91206">91206-Barloworld Piet</option>
              <option value="90165">90165-Hi-Auto</option>
              <option value="91198">91198-Vryheid </option>
              <option value="91107">91107-Dundee</option>
              <option value="90801">90801-Sentracor</option>
              <option value="90770">90770-Newcastle </option>
              <option disabled>**EASTERN CAPE**</option>
              <option value="90223">90223-Kouga Ford </option>
              <option value="90205">90205-William Moffett </option>
              <option value="90203">90203-Port Elizabeth </option>
              <option value="90206">90206-Uitenhage </option>
              <option value="90429">90429-Port Alfred </option>
              <option value="98099">98099-Karoo Ford Kleinpoort </option>
              <option value="90226">90226-King Williams Town </option>
              <option value="90017">90017-Karoo Ford </option>
              <option value="91197">91197-Kelston Ford Cradock </option>
              <option value="91090">91090-Kelston Ford Queenstown </option>
              <option value="90568">90568-Aliwal Auto </option>
              <option disabled>**FREESTATE**</option>
              <option value="90045">90045-Bloemfontein  </option>
              <option value="90456">90456-Kroonstad </option>
              <option value="91225">91225-Fiksburg </option>
              <option value="91115">91115-MMG Ford Bethlehem </option>
              <option value="90449">90449-Human Auto Welkom </option>
              <option value="91106">91106-MMG Ford Harrismith </option>
              <option disabled>**NORTH WEST**</option>
              <option value="91080">91080-Britz </option>
              <option value="91108">91108-Supreme Auto Schweizer Reneke </option>
              <option value="90227">90227-B and R Motors </option>
              <option value="90189">90189-Supreme Auto Mafikeng </option>
              <option value="91189">91189-Supreme Auto Vryburg </option>
              <option value="91105">91105-Action Ford North West Zeerust </option>
              <option value="91104">91104-Action Ford North West Lichtenburg </option>
              <option value="90704">90704-Daly Ford Klerksdorp </option>
              <option value="90460">90460-Daly Ford Potchefstroom </option>
              <option value="90516">90516-Leons Motors </option>
              <option disabled>**LIMPOPO**</option>
              <option value="91103">91103-Phalaborwa Ford </option>
              <option value="91120">91120-Action Ford Louis Trichardt </option>
              <option value="90711">90711-BB Tzaneen Ford </option>
              <option value="91068">91068-Matopi Ford </option>
              <option value="90712">90712-BB Polokwane Ford </option>
              <option value="91116">91116-Action Ford Mokopane </option>
              <option value="91092">91092-Thabazimbi Ford </option>
              <option value="91118">91118-Action Ford Modimolle </option>
              <option disabled>**NORTHERN CAPE**</option>
              <option value="90446">90446-Human Auto Kimberly  </option>
              <option value="90586">90586-North Westen  </option>
              <option value="90594">90594-Dawella Auto </option>
              <option value="90524">90524-Besters Auto </option>
              <option value="91224">91224-Besters Auto De Aar </option>
              <option value="91102">91102-Kuruman Ford </option>
              <option value="91220">91220-Motus Ford Hartswater </option>
              <option disabled>**MPUMALANGA**</option>
              <option value="90655">90655-Witbank</option>
              <option value="91194">91194-Middelburg  </option>
              <option value="90533">90533-Secunda  </option>
              <option value="90130">90130-Nelspruit  </option>
              <option value="91201">91201-Malelane </option>
              <option value="91100">91100-Hazyview  </option>
              <option value="90555">90555-White River  </option>
              <option value="91223">91223-Twenty Four Motor-Piet </option>
              <option value="90134">90134-Twenty Four Motor-Ermelo  </option>
              <option value="90330">90330-McGee and Company Lydenburg </option>
              <option value="91096">91096-Groblersdal </option>
              <option value="91199">91199-Standerton </option>
            </select>
          <button onClick={filterDealer}>Enter</button>
        </div>
        <br/>
        <div className="viewBox">
        <img className="imageCanvas" id="IC1" alt="Part Number" src={partNumberImg}/>
        <img className="imageCanvas" id="IC2" alt="Overview" src={`data:image/png;base64,${partOverviewImg}`}/>
        <img className="imageCanvas" id="IC3" alt="Warranty Tag" src={`data:image/png;base64,${warrantyTagImg}`}/>
        </div>
          <br/><br/>
            <h2>{dealerID} PARTS LIST</h2>
            <div className="partsList">
              <form>
                <table className="table table-striped">
                <thead>
                <tr>
                  <th>Dealer code</th>
                  <th>Part number</th>
                  <th>Vin number</th>
                  <th>Quantity</th>
                  <th>Repair order</th>
                  <th>Part description</th>
                  <th>Part Number</th>
                  <th>Overview</th>
                  <th>Warranty Tag</th>
                  <th>Notes</th>
                  </tr>
                </thead>
                  <tbody style={{height: "300px"}}>
                  {partsData && partsData.map((parts, i) =>
                  <Fragment>
                  {editPartId === parts.id ? (
                    null
                    ) : (
                      <tr key={i}>
                    <td>{parts.dealerCode}</td>
                    <td>{parts.vinNumber}</td>
                    <td>{parts.partNumber}</td>
                    <td>{parts.partsQuantity}</td>
                    <td>{parts.repairOrder}</td>
                    <td>{parts.partName}</td>
                    <td>
                    <button value={parts.partNumberImg} onClick={(e) => {e.preventDefault(); setPartNumberImg(e.target.value);}}>View</button>
                    </td>
                    <td>
                    <button value={parts.partOverviewImg} onClick={(e) => {e.preventDefault(); setPartOverviewImg(e.target.value);}}>View</button>
                    </td>
                    <td>
                    <button value={parts.warrantyTagImg} onClick={(e) => {e.preventDefault(); setWarrantyTagImg(e.target.value);}}>View</button>
                    </td>
                    <td>
                    {parts.partsNote}
                    </td>
                    </tr>
                    )}
                  </Fragment>
                  )}
                  </tbody>
                </table>
                </form>
              </div> 

            <br />
            
        </div>
      </div>
      <div className="disclaimer">
      <h2>*Notice*</h2>
            <p>
              For assistance email sam.katshinda@waidler.co.za.<br/><br/>
              or call 010 900 3011.
            </p>
            </div>
    </div>
  );
}

export default App;
