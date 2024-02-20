import { ButtonRetake } from '../ButtonRetake/ButtonRetake';
import { getTranslatedData } from '../../helpers/translatedData';
import check from '../../images/checkbox.png';
import download from '../../images/download.png';
import { OptionImgType } from '../../types/optionImgType';
import { OptionType } from '../../types/optionType';
import './Thank.scss';

type Props = {
  storedLanguage: OptionType,
  storedGender: OptionImgType,
  storedAge: OptionType,
  storedHates: OptionType,
  storedTopics: OptionImgType,
  email: string,
}

export const Thank: React.FC<Props> = ({
  storedAge, storedGender, storedHates, storedLanguage, storedTopics, email,
}) => {
  const translatedData = getTranslatedData(storedLanguage);

  const chosenHateIds = Object.entries(storedHates)
  .filter(([isSelected]) => isSelected)
  .map(([hateId]) => parseInt(hateId));

  const chosenHateNames = chosenHateIds.map(hateId => {
    const selectedHate = translatedData?.hates.find(hate => hate.id === hateId);
    return selectedHate ? selectedHate.name : '';
  });
  
  const chosenTopicIds = Object.entries(storedTopics)
  .filter(([isSelected]) => isSelected)
  .map(([topicId]) => parseInt(topicId));

  const chosenTopicNames = chosenTopicIds.map(topicId => {
    const selectedTopic = translatedData?.topics.find(topic => topic.id === topicId);
    return selectedTopic ? selectedTopic.name : '';
  });

  const handleDownloadClick = () => {
    const csvData = [
      ['order', 'title', 'type', 'answer'],
      ['1', `${translatedData?.steps[0].title}`, 'single-select', storedLanguage.name],
      ['2', `${translatedData?.steps[1].title}`, 'single-select-image', storedGender.name],
      ['3', `${translatedData?.steps[2].title}`, 'single-select', storedAge.name],
      ['4', `${translatedData?.steps[3].title}`, 'multiple-select', JSON.stringify(chosenHateNames)],
      ['5', `${translatedData?.steps[4].title}`, 'bubble', JSON.stringify(chosenTopicNames)],
      ['6', 'Email', 'email', email],
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'user_responses.csv';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className="thank page__section">
      <h1 className='thank__title'>
        {translatedData && translatedData.text[3].thank}
      </h1>

      <p style={{ fontWeight: '600', marginBottom: '60px' }}>
        {translatedData && translatedData.text[3].supporting}
      </p>

      <img src={check} alt='check' className='thank__check' />

      <div className="thank__download" onClick={handleDownloadClick}>
        <img src={download} alt="download" className='thank__download--image' />

        <p style={{ fontWeight: '600' }}>
          {translatedData && translatedData.text[3].download}
        </p>
      </div>

      <ButtonRetake
        storedLanguage={storedLanguage}
      />
    </section>
  );
}