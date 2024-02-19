import { ButtonRetake } from '../ButtonRetake/ButtonRetake';
import { useAppSelector } from '../../app/hooks';
import { getTranslatedData } from '../../helpers/translatedData';
import check from '../../images/checkbox.png';
import download from '../../images/download.png';
import './Thank.scss';

export const Thank = () => {
  const chosenLanguage = useAppSelector(state => state.chosenLanguage.chosenLanguage);
  const translatedData = getTranslatedData(chosenLanguage);

  const chosenGender = useAppSelector(state => state.chosenGender.chosenGender);
  const chosenAge = useAppSelector(state => state.chosenAge.chosenAge);
  const chosenHate = useAppSelector(state => state.chosenHate.chosenHates);
  const chosenTopics = useAppSelector(state => state.chosenTopics.chosenTopics);
  const usersEmail = useAppSelector(state => state.usersEmail.email);

  const chosenHateIds = Object.keys(chosenHate).filter(hateId => chosenHate[+hateId]);
  const chosenHateNames = chosenHateIds.map(hateId => {
    const selectedHate = translatedData?.hates.find(hate => hate.id === parseInt(hateId));
    return selectedHate ? selectedHate.name : '';
  });

  const chosenTopicIds = Object.keys(chosenTopics).filter(topicId => chosenHate[+topicId]);
  const chosenTopicNames = chosenTopicIds.map(topicId => {
    const selectedTopic = translatedData?.topics.find(topic => topic.id === parseInt(topicId));
    return selectedTopic ? selectedTopic.name : '';
  });

  const handleDownloadClick = () => {
    const csvData = [
      ['order', 'title', 'type', 'answer'],
      ['1', `${translatedData?.steps[0].title}`, 'single-select', chosenLanguage.name],
      ['2', `${translatedData?.steps[1].title}`, 'single-select-image', chosenGender.name],
      ['3', `${translatedData?.steps[2].title}`, 'single-select', chosenAge.name],
      ['4', `${translatedData?.steps[3].title}`, 'multiple-select', chosenHateNames],
      ['5', `${translatedData?.steps[4].title}`, 'bubble', chosenTopicNames],
      ['6', 'Email', 'email', JSON.stringify(usersEmail)],
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

      <ButtonRetake />
    </section>
  );
}