// Detail.js
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import star from "../../assets/star.svg";
import './index.css';

export default function Detail({ movie }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    id,
    rank,
    title,
    genres,
    description,
    ratings,
    year,
    imdb_id,
    imdb_url,
    image_url,
    director,
    writer,
    duration,
    age_certification,
  } = movie;

  const formattedGenres = genres.replace(/\[|\]|'/g, '').replace(/\s*,\s*/g, ',');

  return (
    <>
      <Button
        pos="static"
        backgroundColor="transparent"
        color="#8758FF"
        fontSize={12}
        fontWeight={700}
        onClick={onOpen}
      >
        Learn More
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent top="120px" left="30%">
          <ModalCloseButton
            w="30px"
            height="fit-content"
            bgColor="#31363Fa1"
            borderRadius="4px"
            color="#F5F7F8"
            m="0px 0px 10px 0px"
            padding="5px 0px"
            _hover={{ color: "#525CEB" }}
          />
          <ModalBody>
            <div
              id={`movie-${id}`}
              key={`movie-${id}`}
              style={{
                backgroundColor: '#191919',
                opacity: '0.89',
                width: '650px',
                height: '400px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '6px',
                color: '#F5F7F8',
              }}
            >
              <div>
                <img
                  src={image_url}
                  style={{
                    width: '228px',
                    height: 'fit-content',
                    borderRadius: '8px',
                    margin: '5px 0px 0px 0px',
                  }}
                  alt={title}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '5px 0px 0px 0px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '400', color: '#864AF9' }}>
                      Rank:
                    </span>
                    <span style={{ fontSize: '14px' }}>{rank}</span>
                  </div>
                  <span style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                    <img src={star} alt="Rating" />
                    {ratings}
                  </span>
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '100%',
                  margin: '5px',
                  padding: '5px 5px 5px 10px',
                  fontSize: '12px',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '500' }}>{title}</span>
                  <p>
                    <small>
                      IMDb ID: <em>{imdb_id}</em>
                    </small>
                  </p>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Year: </span>
                  <span>{year}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Genre: </span>
                  <span>{formattedGenres}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Description: </span>
                  <span>{description}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Director: </span>
                  <span>{director}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Writer: </span>
                  <span>{writer}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Duration: </span>
                  <span>{duration} min</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>Age Certification: </span>
                  <span style={{ fontSize: '10px' }}>{age_certification}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#864AF9', fontWeight: '400' }}>IMDb URL: </span>
                  <span>
                    <small>{imdb_url}</small>
                  </span>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
