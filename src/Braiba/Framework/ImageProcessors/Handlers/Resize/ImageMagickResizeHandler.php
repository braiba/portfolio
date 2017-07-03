<?php

namespace Braiba\Framework\ImageProcessors\Handlers\Resize;

use Braiba\Framework\Config\Config;
use Braiba\Framework\Di;
use ThomasBickley\Entity\Image;
use Braiba\Framework\ImageProcessors\Handlers\AbstractImageMagickHandler;
use Braiba\Framework\ImageProcessors\Handlers\ResizeHandler;

class ImageMagickResizeHandler extends AbstractImageMagickHandler implements ResizeHandler
{
    protected $standards = null;

    /**
     * @return null
     */
    protected function getStandards()
    {
        if ($this->standards === null) {
            $standardsConfig = Di::getInstance()->getConfig()->get('images')->get('sizes');
            foreach ($standardsConfig as $name => $size) {
                /** @var Config $size */
                $standardsConfig[$name] = [
                    'width' => $size->getValue('width'),
                    'height' => $size->getValue('height'),
                ];
            }
        }
        return $this->standards;
    }

    public function resize(Image $image, $width, $height)
    {
        // TODO: Implement resize() method.
    }

    public function resizeToStandard(Image $image, $standardName)
    {
        $standards = $this->getStandards();
        if (!isset($standards[$standardName])) {
            return $image;
        }

        list($width, $height) = $standards[$standardName];

        return $this->resize($image, $width, $height);
    }
}