import React, { useState, Fragment } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import Select from 'react-select';

function App() {
  const [editPartId, setEditPartId] = useState("");

  const [imageData, setImageData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [imgLoader, setImgLoader] = useState(false);

  const [id, setID] = useState("");
  const [dealerID, setDealerID] = useState("");
  const [partsData, setPartsData] = useState([]);

  const options = [
    { value: 'N/A', label: 'N/A' },
  {label: "**GAUTENG**", options: [
    { value: '91214', label: '91214-Woodmead' },
    { value: '91217', label: '91217-Sandton' },
    { value: '90420', label: '90420-Kempton Park' },
    { value: '90238', label: '90238-Basil Green' },
    { value: '90046', label: '90046-Action Ford Roodepoort' },
    { value: '90020', label: '90020-Krugersdorp Ford' },
    { value: '90612', label: '90612-Krugersdorp Randfontein' },
    { value: '90466', label: '90466-Allen Joss' },
    { value: '90710', label: '90710-Menlyn ' },
    { value: '90416', label: '90416-Park Ford' },
    { value: '90536', label: '90536-Springs' },
    { value: '91204', label: '91204-Barloworld Ford Alberton ' },
    { value: '91203', label: '91203-Bruma Ford' },
    { value: '91216', label: '91216-William Nicole' },
    { value: '90554', label: '90554-Boksburg' },
    { value: '91130', label: '91130-Vereeniging' },
    { value: '90022', label: '90022-Hatfield' },
    { value: '91193', label: '91193-MMG Ford Heidelberg' },
    { value: '90261', label: '90261-Paul Maher Ford' },
    { value: '90193', label: '90193-Motus Ford Germiston' },
    { value: '91065', label: '91065-The Glen' },
    { value: '91209', label: '91209-Ford Selby' },
    { value: '90471', label: '90471-CMH Ford Randburg' },
    { value: '91215', label: '91215-Midrand' },
    { value: '91218', label: '91218-Fourways' },
    { value: '90359', label: '90359-Eagle Ford' },
    { value: '90661', label: '90661-Aurinia Ford ' },
    { value: '90468', label: '90468-CMH Ford Gezina' },
    { value: '90481', label: '90481-Steyns ' },
    { value: '90560', label: '90560-Brokenhorstspruit' },
    { value: '90487', label: '90487-Lazarus' },
    { value: '98060', label: '98060-Silverlakes' },]},
  {label: "**WESTERN CAPE**", options: [
    { value: '91070', label: '91070-Claremont' },
    { value: '91208', label: '91208-Tygervalley' },
    { value: '91099', label: '91099-Robertson' },
    { value: '90042', label: '90042-Paarden' },
    { value: '91205', label: '91205-N1 City' },
    { value: '90663', label: '90663-Jaffes Ford' },
    { value: '90099', label: '90099-Motus Ford Diep River' },
    { value: '90968', label: '90968-Rola Ford Hermanus' },
    { value: '91088', label: '91088-Halfway Ford Goodwood' },
    { value: '91101', label: '91101-Halfway Ford Kuilsriver' },
    { value: '91111', label: '91111-Action Ford Citrusdal' },
    { value: '91122', label: '91122-Rola Ford Caledon' },
    { value: '91123', label: '91123-Novel Ford Paarl' },
    { value: '91124', label: '91124-Novel Ford Stellenbosch' },
    { value: '91125', label: '91125-Action Ford Malmesbury' },
    { value: '91126', label: '91126-Action Ford Moorreesburg' },
    { value: '91129', label: '91129-Mossel Bay Ford' },
  ]},
  {label: "**KWAZULU-NATAL**", options: [
    { value: '91098', label: '91098-Kokstad' },
    { value: '91213', label: '91213-Amanzimtoti' },
    { value: '90137', label: '90137-Durban South' },
    { value: '91202', label: '91202-Ballito' },
    { value: '91093', label: '91093-Halfway Waterfall' },
    { value: '90144', label: '90144-CMH Ford' },
    { value: '90455', label: '90455-PortShep' },
    { value: '90150', label: '90150-Ritchie Ford' },
    { value: '90152', label: '90152-Ritchie Empangeni' },
    { value: '90154', label: '90154-Umhlanga' },
    { value: '91190', label: '91190-Eshowe Auto' },
    { value: '91207', label: '91207-Pinetown' },
    { value: '91206', label: '91206-Barloworld Piet' },
    { value: '90165', label: '90165-Hi-Auto' },
    { value: '91198', label: '91198-Vryheid' },
    { value: '91107', label: '91107-Dundee' },
    { value: '90801', label: '90801-Sentracor' },
    { value: '90770', label: '90770-Newcastle' },
  ]},
  {label: "**EASTERN CAPE**", options: [
    { value: '90223', label: '90223-Kouga Ford' },
    { value: '90205', label: '90205-William Moffett' },
    { value: '90203', label: '90203-Port Elizabeth' },
    { value: '90206', label: '90206-Uitenhage' },
    { value: '90429', label: '90429-Port Alfre' },
    { value: '98099', label: '98099-Karoo Ford Kleinpoort' },
    { value: '90226', label: '90226-King Williams Town' },
    { value: '90017', label: '90017-Karoo Ford' },
    { value: '91197', label: '91197-Kelston Ford Cradock' },
    { value: '91090', label: '91090-Kelston Ford Queenstown' },
    { value: '90568', label: '90568-Aliwal Auto' },
  ]},
  {label: "**FREESTATE**", options: [
    { value: '90045', label: '90045-Bloemfontein' },
    { value: '90456', label: '90456-Kroonstad' },
    { value: '91225', label: '91225-Fiksburg' },
    { value: '91115', label: '91115-MMG Ford Bethlehem' },
    { value: '90449', label: '90449-Human Auto Welkom' },
    { value: '91106', label: '91106-MMG Ford Harrismith' },
  ]},
  {label: "**NORTH WEST**", options: [
    { value: '91080', label: '91080-Britz' },
    { value: '91108', label: '91108-Supreme Auto Schweizer Reneke' },
    { value: '90227', label: '90227-B and R Motors' },
    { value: '90189', label: '90189-Supreme Auto Mafikeng' },
    { value: '91189', label: '91189-Supreme Auto Vryburg' },
    { value: '91105', label: '91105-Action Ford North West Zeerust' },
    { value: '91104', label: '91104-Action Ford North West Lichtenburg' },
    { value: '90704', label: '90704-Daly Ford Klerksdorp' },
    { value: '90460', label: '90460-Daly Ford Potchefstroom' },
    { value: '90516', label: '90516-Leons Motors' },
  ]},
  {label: "**LIMPOPO**", options: [
    { value: '91103', label: '91103-Phalaborwa Ford' },
    { value: '91120', label: '91120-Action Ford Louis Trichardt' },
    { value: '90711', label: '90711-BB Tzaneen Ford' },
    { value: '91068', label: '91068-Matopi Ford' },
    { value: '90712', label: '90712-BB Polokwane Ford' },
    { value: '91116', label: '91116-Action Ford Mokopane' },
    { value: '91092', label: '91092-Thabazimbi Ford' },
    { value: '91118', label: '91118-Action Ford Modimolle' },
    ]},
  {label: "**NORTHERN CAPE**", options: [
    { value: '90446', label: '90446-Human Auto Kimberly' },
    { value: '90586', label: '90586-North Westen' },
    { value: '90594', label: '90594-Dawella Auto' },
    { value: '90524', label: '90524-Besters Auto' },
    { value: '91224', label: '91224-Besters Auto De Aar' },
    { value: '91102', label: '91102-Kuruman Ford' },
    { value: '91220', label: '91220-Motus Ford Hartswater' },
  ]},
  {label: "**MPUMALANGA**", options: [
    { value: '90655', label: '90655-Witbank' },
    { value: '91194', label: '91194-Middelburg' },
    { value: '90533', label: '90533-Secunda' },
    { value: '90130', label: '90130-Nelspruit' },
    { value: '91201', label: '91201-Malelane' },
    { value: '91100', label: '91100-Hazyview' },
    { value: '90555', label: '90555-White River' },
    { value: '91223', label: '91223-Twenty Four Motor-Piet' },
    { value: '90134', label: '90134-Twenty Four Motor-Ermelo' },
    { value: '90330', label: '90330-McGee and Company Lydenburg' },
    { value: '91096', label: '91096-Groblersdal' },
    { value: '91199', label: '91199-Standerton' },
  ]},
];

  const filterDealer = (e) =>  {
      e.preventDefault();

      if (dealerID === ""){
        alert("Please select a dealership");
      } else {
      Axios.post("https://waidlerdev.com/partsDisposalBackend/api/post/loggingTable.php", { 
        dealerID: dealerID
        }).then((response) => {
          if (typeof(response.data) == 'string'){
            setErrorMsg(response.data);
            setPartsData([]);
            setImageData([]);
          } else {
            setPartsData(response.data);
            setErrorMsg("");
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    };

    const getImages = (e) =>  {
      e.preventDefault();
      console.log(id);

      if (id !== "" || null || undefined){
        Axios.post("https://waidlerdev.com/partsDisposalBackend/api/post/getImages.php", { 
        id: id
        }).then((response) => {
            setImageData(response.data);
            setImgLoader(false);
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
        <Select
              name="selectTag"
              defaultValue=""
              placeholder="Choose dealership..."
              isSearchable={true}
              onChange={opt => {setDealerID(opt.value)}}
              options={options}
              required
        />
        <button onClick={filterDealer}>Enter</button>
        </div>
        <br/>

        <div className="noticeBoard">
        {imgLoader && 
        <center>
          <div class="lds-roller">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </center>
        }
        
        {imageData && imageData.map((images, i) => 
            <div className="viewBox" key={i}>
            <img className="IC1" alt="Part Number" src={images.partNumberImg}/>
            <img className="IC2" alt="Overview" src={images.partOverviewImg}/>
            <img className="IC3" alt="Warranty Tag" src={images.warrantyTagImg}/>
            </div>
        )}
        </div>

        {errorMsg && 
        <div className="errorMsg">
          <h4>{errorMsg}</h4>
        </div>
        }
        
          <br/><br/>
            <h2>{dealerID} PARTS LIST</h2>
            <div className="partsList">
              <form>
                <table className="table table-striped">
                <thead>
                <tr>
                  <th>Dealer code</th>
                  <th>Vin number</th>
                  <th>Part number</th>
                  <th>Quantity</th>
                  <th>Repair order</th>
                  <th>Part description</th>
                  <th>Images</th>
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
                    <button type="submit" value={parts.id} onDoubleClick={(e) => {setImgLoader(true); getImages(e);}} onClick={(e) => {e.preventDefault(); {setID(e.target.value)}}}>View</button>
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
