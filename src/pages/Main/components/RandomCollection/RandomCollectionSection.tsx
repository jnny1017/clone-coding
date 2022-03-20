import { RandomCollectionDataRes } from '../../../../store/main/main.model';

import Slider from '../../../../components/Slider';
import Section from '../../../../components/Section';
import { SliderItemModel } from '../../../../components/Slider/models/sliderItem.model';

interface Props {
  data: RandomCollectionDataRes;
  onClickModal: (slide: SliderItemModel) => void
}

export default function RandomCollectionSection({ data, onClickModal }: Props) {
  return (
    <>
      <Section title={data.title} subtitle={data.subtitle}>
        <Slider data={data.data.products} onClickModal={onClickModal} />
      </Section>
    </>
  );
}
