import style from './../styles/form.module.scss'
function ConsentCheckbox({ giveConsent, setGiveConsent}) {
    return (
        <div className={style.consentsection}>
        <input style={{margin:"4px"}} type="checkbox" value={giveConsent} onClick={(e) => setGiveConsent(e.target.checked)} />
            <p className={style.consentlabel}>I agree with having my personal data, above, processed by this app.</p>
        </div>
    );
}
export default ConsentCheckbox;